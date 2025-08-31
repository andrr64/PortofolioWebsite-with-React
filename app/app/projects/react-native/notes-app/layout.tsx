import { Metadata } from "next";
import ReactNativeProjectsPage from "./page";

export const metadata: Metadata = {
  title: "Notes App - Andreas",
  description: "Lorem ipsum",
};

export default function Layout(){
    return (
        <ReactNativeProjectsPage/>
    )
}