
// import React from 'react';
import Project from './project-unc-inc.png';
import image1 from './project1.jpg';
import image3 from './project2.jpg';



const Home = () => {
    return (
        <main className="home">
            <section>


            <h2>Projects Unc inc</h2>
            <p>On this page you can see the projects of unc inc</p>
            <p>You can also login to the form </p>
            </section>

            <section>
                <h2>About Unc inc</h2>
                <p>On this page you can see the projects of unc inc</p>
                <ul>
                    <li>

                        <img src={Project} alt="project of unc inc" />
                    </li>
                    <li>

                        <img src={image1} alt="project of unc inc" />
                    </li>
                    <li>

                        <img src={image3} alt="project of unc inc"/>
                    </li>
                </ul>

            </section>


        </main>
    );
}

export default Home;