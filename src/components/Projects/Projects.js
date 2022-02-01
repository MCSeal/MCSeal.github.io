import React from 'react';
import style from './Projects.css';
import { projects } from '../../data/projects.js';

const Hero = () => (
    <div class="project-section">
        <div class="section-inner">
            <h2>Projects</h2>
            <div class="section-inner">
                    <a href="https://user-app-ms.herokuapp.com/"  target="_blank"><h2>User/Forum App</h2></a>
                    <div class= "link-inner">
                        <a href="https://github.com/MCSeal/userApp" target="_blank"><i class="fab fa-github fa-fw"></i></a>
                    </div>
                <br />
                This is a Node/Mongoose/Express app using EJS templates with a simple "forum" like page. This Includes authentication, sign-up, password reset and back-end using MongoDb/Mongoose. 

            </div>
            <div class="section-inner">
                <a href="https://frosty-swirles-3e0def.netlify.app/"  target="_blank"><h2>RSVP Wedding App</h2></a>
                <div class= "link-inner">
                    <a href="https://github.com/MCSeal/wedding" target="_blank"><i class="fab fa-github fa-fw"></i></a>
                </div>
                <br />
                This is a react mock-up of my personal wedding website, including a RSVP form using firebase as the backend.
                This includes google maps integration, React, and firebase.

            </div>
            <div class="section-inner">
                    <a href="https://recipe-app-ms.herokuapp.com/"  target="_blank"><h2>Recipe App</h2></a>
                    <div class= "link-inner">
                        <a href="https://github.com/MCSeal/Recipe-App" target="_blank"><i class="fab fa-github fa-fw"></i></a>
                    </div>
                <br />
                This is a recipe app which allows you to create your own recipe which saves in realtime to your browser.
                Key features include adding/deleting recipe, filtering and searching for recipes, and adding ingredients which you can then toggle if you have/have-not. 

            </div>
            <div class="section-inner">
                    <a href="https://movie-scraper-ms.herokuapp.com/"  target="_blank"><h2>Movie Favourite App</h2></a>
                    <div class= "link-inner">
                        <a href="https://github.com/MCSeal/Movie-Scraper" target="_blank"><i class="fab fa-github fa-fw"></i></a>
                    </div>
                <br />

                This is an API app which connects to a movie-search database with your parameters, you can then add movies to your favourite-list! You can then share your list with others via a shareable link. 
                This uses Mongoose/MongoDb as a backend. 

            </div>
            <div class="section-inner">
                
                <div class= "title-inner">
                    <a href="https://sealyoulater.github.io/"  target="_blank"><h2>Podcast Site</h2></a>
                    <div class= "link-inner">
                        <a href="https://github.com/SealYouLater/sealyoulater.github.io" target="_blank"><i class="fab fa-github fa-fw"></i></a>
                    </div>
                </div>
                <br />

                Website I made for a podcast, using jekyll and github pages. Includes jekyll and pure HTML/CSS for pop-out menu and blog posts. 

            </div>
        </div>
  </div> 
);

export default Hero;