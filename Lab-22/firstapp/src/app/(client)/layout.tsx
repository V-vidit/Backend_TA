import { ReactNode } from "react";
import Link from "next/link";

export default function ClientLayout({
    children,
}:
{
    children: ReactNode
}){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Client</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" href="/client">Home</Link>
                    <Link className="nav-link" href="/dashboard">Dashboard</Link>
                    <Link className="nav-link" href="/about">About Us</Link>
                  </div>
                </div>
              </div>
            </nav>
            <div>
                {children}
            </div>
        </>
    );
}