import React from 'react'

import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import MeetTeam from './pages/Meetteam.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index:true,
                element: <About />,
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },
            {
                path: '/team',
                element: <MeetTeam/>
            },
           
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  ); 