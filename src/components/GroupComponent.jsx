import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import ProjectDescription from './ProjectDescription';
import Tags from './tags';
import Faculties from './faculties';

const GroupComponent = ({ className = "", propFlex, propAlignSelf, project }) => {
  const { project_name, description, faculty_list } = project;

  const groupDivStyle = useMemo(() => ({
    flex: propFlex,
    alignSelf: propAlignSelf,
  }), [propFlex, propAlignSelf]);

  return (
    <div
      className={`group-component flex-1 rounded-smi bg-white flex flex-row flex-wrap items-end justify-start py-[41px] px-8 box-border relative gap-[20px] max-w-full text-left text-17xl text-black font-inter ${className}`}
      style={groupDivStyle}
    >
      {/* Static content */}
      <img
        className="h-14 w-14 absolute !m-[0] top-[-28px] right-[-24px] object-contain z-[3]"
        loading="lazy"
        alt=""
        src="/group-30308@2x.png"
      />
      <div className="h-10 w-10 absolute !m-[0] top-[-20px] left-[-17px] text-white font-general-sans">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato w-full h-full z-[3]" />
        <h1 className="m-0 absolute top-[-6px] left-[30.83px] text-inherit font-medium font-inherit [transform:_rotate(47deg)] [transform-origin:0_0] mq900:text-10xl mq450:text-3xl">
          +
        </h1>
      </div>

      {/* Dynamic content */}
      <ProjectDescription description={description} />
      <Tags tags={[]} />
      <Faculties faculties={faculty_list} />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  project: PropTypes.shape({
    project_name: PropTypes.string,
    description: PropTypes.string,
    faculty_list: PropTypes.array
  }).isRequired
};

const GroupComponentsContainer = ({ className = "", propFlex, propAlignSelf }) => {
  const [projects, setProjects] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const authToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2OWExNmZjOGU2Y2JmY2UwMDViOTc5ZSJ9LCJpYXQiOjE3MjI0ODIyMjksImV4cCI6MTcyMjQ4NzYyOX0.ws5zzPzrD36k6DW7DQ8fsynmFybjTQfCcGrWl9o67Bs';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/projectRoutes/getProjects', {
          headers: {
            Authorization: authToken
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Fetched data:', data); // Log the data to see its structure
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          throw new Error('Data structure is not as expected');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setFetchError(error.message);
      }
    };

    fetchData();
  }, [authToken]);

  const groupDivStyle = useMemo(() => ({
    flex: propFlex,
    alignSelf: propAlignSelf,
  }), [propFlex, propAlignSelf]);

  const ensureMinimumProjects = (projects) => {
    const minimumProjects = 2;
    if (projects.length < minimumProjects) {
      const dummyProjects = Array.from({ length: minimumProjects - projects.length }, (_, index) => ({
        project_name: `Dummy Project ${index + 1}`,
        description: `Dummy project description ${index + 1}`,
        faculty_list: [`Dummy Faculty ${index + 1}`]
      }));
      return [...projects, ...dummyProjects];
    }
    return projects;
  };

  const displayedProjects = ensureMinimumProjects(projects);

  return (
    <div className={className} style={groupDivStyle}>
      {fetchError ? (
        <div className="error-message text-red-500">{fetchError}</div>
      ) : (
        displayedProjects.map((project, index) => (
          <GroupComponent
            key={index}
            className={className}
            propFlex={propFlex}
            propAlignSelf={propAlignSelf}
            project={project}
          />
        ))
      )}
    </div>
  );
};

GroupComponentsContainer.propTypes = {
  className: PropTypes.string,
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default GroupComponentsContainer;
