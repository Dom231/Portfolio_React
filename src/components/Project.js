import React from 'react';
import '../styles/Prof.css';
export default function Portfolio(){
    return (
        <div class = "row">
    <div id = "myWork" class = "myWork col-2">
        <h2>Previous Work:</h2>
    </div>
    <div class ="col-10 w-100">
        <div class="movN row ">
            <div>
                <h3>Project Title: Movie-Night-In</h3>
                <li><a href="https://github.com/Carter-Schmitz/Movie-Night-In.git">Github Repo</a></li> 
                <li><a href="https://carter-schmitz.github.io/Movie-Night-In/">Github Page</a></li> 
                <h4>Description:</h4>
                <p>Worked in a group to create a webapplication to display movie information. The application displays a matching movie result for the search criteria in the form of a poster, short plot synopsis, and a GIF related to the movie. Some additional functionality is the ability to save movies to a watchlist for later reference. The watchlist is saved to local storage, and can be cleared at the push of a button.</p>
                <h4>Primary Role:</h4>
                <li>HTML and JavaScript</li>


            </div>
            

        </div>

        <div class="movN row ">
          <div>
              <h3>Project Title: PawFriends </h3>
              <li><a href="https://github.com/calebcarnett/pawfriends.git">Github Repo</a></li> 
              <li><a href="https://petadoption231.herokuapp.com/petlist">herokuapp Page</a></li> 
              <h4>Description:</h4>
              <p>Worked in a group to create a Full-Stack-Webapplicaton that allows the user to post pets they would like to put up for adoption.
                This applicatioin will allow the user to log-in/sign-up; Once logged in, the user is allowed to post a pet, by filling out the "Pet-Submission-Form". 
                The user is also allowed to delete any post that the user personaly posted. 
      
              </p>
              <h4>Primary Role:</h4>
              <li>Font-End set-up of views and JavaScript functionality</li>


          </div>
          

      </div>
        
        
        
    </div>
</div>

    );
}