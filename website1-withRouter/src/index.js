import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts, {loader as postsLoader} from './routes/Posts';
import NewPost, {action as newPostAction} from "./routes/NewPost"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import RootLayout from "./routes/RootLayout"

const router = createBrowserRouter([{
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Posts/>,
                loader: postsLoader,
                children: [
                    {
                        path: "/create-post",
                        element: <NewPost/>,
                        action: newPostAction
                    }
                ]
            }
        ]
    }])const root = ReactDOM.createRoot(document.getElementById('root'));root.render(/*    <App /> */ <RouterProvider router={router}/>);
