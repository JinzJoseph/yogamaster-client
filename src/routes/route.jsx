import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Instructors from "../Pages/Instructor/Instructors";
import Classess from "../Pages/Classes/Classess";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ClassesDetails from "../Pages/Classes/ClassesDetails";
import axios from "axios";
import DashBoardLatout from "../Layout/DashBoardLatout";
import DashBoard from "../Pages/DashBoard/DashBoard";
import StudentCp from "../Pages/DashBoard/Student/StudentCp";
import EnrolledClass from "../Pages/DashBoard/EnrolledClass/EnrolledClass";
import SelectedClass from "../Pages/DashBoard/Student/SelectedClass";
import PaymentHostroy from "../Pages/DashBoard/Payment/PaymentHostroy";
import ApplyInstructor from "../Pages/DashBoard/Apply/ApplyInstructor";
import MyPayment from "../Pages/DashBoard/Payment/MyPayment";
import CourseDetails from "../Pages/DashBoard/Course/CourseDetails";
import InstructorCp from "../Pages/Instructor/InstructorCp";
import AddClass from "../Pages/Instructor/AddClass";
import MyClass from "../Pages/Instructor/MyClass";
import ApprovedClass from "../Pages/Instructor/ApprovedClass";
import PendingClass from "../Pages/Instructor/PendingClass";
import UpdateClass from "../Pages/Instructor/UpdateClass";
import AdminHome from "../Pages/DashBoard/Admin/AdminHome";
import ManageUser from "../Pages/DashBoard/Admin/ManageUser";
import ManageClasses from "../Pages/DashBoard/Admin/ManageClasses";
import Application from "../Pages/DashBoard/Admin/Application";
import UpdateUser from "../Pages/DashBoard/Admin/UpdateUser";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classess />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "class/id/:id",
        element: <ClassesDetails />,
        loader: async ({ params }) => {
          try {
            const response = await axios.get(
              `https://yogamaster-server.onrender.com/classes/id/${params.id}`
            );
            return response.data;
          } catch (error) {
            console.error("Error fetching class details:", error);
            throw error;
          }
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLatout />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      //student route
      {
        path: "student-cp",
        element: <StudentCp />,
      },
      {
        path: "enrolled-classes",
        element: <EnrolledClass />,
      },
      {
        path: "my-selected",
        element: <SelectedClass />,
      },
      {
        path: "my-payments",
        element: <PaymentHostroy />,
      },
      {
        path: "apply-instructor",
        element: <ApplyInstructor />,
      },
      {
        path: "payment",
        element: <MyPayment />,
      },
      {
        path: "course-details",
        element: <CourseDetails />,
      },
      {
        path: "instructor-cp",
        element: <InstructorCp />,
      },
      {
        path: "add-class",
        element: <AddClass />,
      },
      {
        path: "my-classes",
        element: <MyClass />,
      },
      {
        path: "my-approved",
        element: <ApprovedClass />,
      },
      {
        path: "my-pending",
        element: <PendingClass />,
      },
      {
        path: "update/:id",
        element: <UpdateClass />,
        loader: async ({ params }) => {
          try {
            const response = await axios.get(
              `https://yogamaster-server.onrender.com/classes/id/${params.id}`
            );
            return response.data;
          } catch (error) {
            console.error("Error fetching class details:", error);
            throw error;
          }
        },
      },
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "manage-users",
        element: <ManageUser />,
      },
      {
        path: "manage-class",
        element: <ManageClasses />,
      },
      {
        path: "manage-application",
        element: <Application />,
      },
      {
        path:"update-user/:id",
        element:<UpdateUser/>,
        loader: async ({ params }) => {
          try {
            const response = await axios.get(
              `https://yogamaster-server.onrender.com/user/id/${params.id}`
            );
            return response.data;
          } catch (error) {
            console.error("Error fetching class details:", error);
            throw error;
          }
        },
      }
    ],
  },
]);
