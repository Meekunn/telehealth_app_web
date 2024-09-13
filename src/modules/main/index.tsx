import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Outlet";
import { mainPaths } from "../../routes/paths";
import MainPage from "./MainPage";
import Sidebar from "../../resuables/Navigation/SidebarBody";
import Data from "../../phishingLesson.json";
import Lesson from "../course-content/Lesson";
import parse from "html-react-parser";
import React from "react";

function SuperAdminRoutes() {
  const location = useLocation();

  // Corrected lessonData mapping structure
  const lessonData = Object.fromEntries(
    Object.entries(Data).map(([lessonKey, lessonValue]) => [
      lessonKey,
      {
        ...lessonValue,
        subHeadings: Object.fromEntries(
          Object.entries(lessonValue.subHeadings).map(([key, value]) => [
            key,
            {
              ...value,
              content: React.createElement(
                React.Fragment,
                null,
                parse(value.content)
              ),
            },
          ])
        ),
      },
    ])
  );

  return (
    <Routes>
      <Route path={mainPaths.BASE} element={<Dashboard />}>
        <Route
          path={mainPaths.BASE}
          element={<Navigate to={mainPaths.MODULE} replace />}
        />
        <Route path={mainPaths.MODULE} element={<MainPage />} key="mainPage">
          <Route
            index
            element={
              <Navigate
                to={`${mainPaths.MODULE}/${Object.keys(lessonData)[0]}`}
                replace
              />
            }
          />
          {Object.keys(lessonData).map((lessonKey) => (
            <>
              <Route
                key={lessonKey}
                path={`${mainPaths.MODULE}/${lessonKey}`}
                element={<Lesson text lesson={lessonData[lessonKey]} />}
              />
              <Route
                key={lessonKey}
                path={`${mainPaths.MODULE}/${lessonKey}/quiz`}
                element={<Lesson quiz lesson={lessonData[lessonKey]} />}
              />
              <Route
                key={lessonKey}
                path={`${mainPaths.MODULE}/${lessonKey}/video`}
                element={<Lesson video lesson={lessonData[lessonKey]} />}
              />
            </>
          ))}
        </Route>
        <Route path={mainPaths.MODULE} element={<Sidebar />} />
        <Route
          path="*"
          element={
            <Navigate to="/404" replace state={{ from: location.pathname }} />
          }
        />
      </Route>
    </Routes>
  );
}

export default SuperAdminRoutes;
