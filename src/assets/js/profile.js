// app.js
angular.module('profileApp', [])
  .controller('ProfileController', function($scope, $http) {
    $scope.username = ''; 
    $scope.assessments = {}; 

    // Function to fetch user's assessment data from the backend
    $scope.fetchAssessmentData = function() {
      // Replace 'current_user' with the actual username or user ID of the logged-in user
      const username = 'admingod'; // Example username

      $http.get('/get-assessment')
        .then(response => {
          // Handle the API response and update the assessments object
          $scope.assessments = response.data.assessments;

          // Update the fetched username
          $scope.username = response.data.username;

         
          // Calling the function to update progress bars
          $scope.updateProgressBars(); 
          
          // Set the profile description based on the total score
          $scope.setProfileDescription();

        })
        .catch(error => {
          console.error('Error fetching assessment data:', error);
        });
    };

    // Function to calculate the total score based on the assessments
    function calculateTotalScore(assessments) {
      let totalScore = 0;
      for (const category in assessments) {
        totalScore += assessments[category];
      }
      return totalScore/5;
    }

    // Function to set the profile description based on the total score
    $scope.setProfileDescription = function() {
      $scope.totalScore = calculateTotalScore($scope.assessments);
      if ($scope.totalScore >= 80) {
        $scope.profileDescription = "Flourishing Well-being: This set represents individuals who demonstrate flourishing mental well-being, characterized by high scores across various questionnaires. They exhibit resilience, optimism, a strong sense of purpose, and overall satisfaction with life.";
      } else if ($scope.totalScore >= 60) {
        $scope.profileDescription = "Nurturing Growth: Individuals in this set show potential for growth and development but may have mild areas of concern. Their scores suggest an opportunity for personal reflection, self-care, and seeking support to address any emerging mental health issues.";
      } else if ($scope.totalScore >= 40) {
        $scope.profileDescription = "Managing Challenges: This set includes individuals who are coping with moderate levels of mental challenges. Their scores indicate the presence of significant stress, anxiety, or low mood, requiring proactive management and appropriate support to enhance well-being.";
      } else if ($scope.totalScore >= 20) {
        $scope.profileDescription = "Seeking Support: Individuals falling into this set demonstrate notable mental health concerns that may benefit from professional intervention and support. Their scores highlight the presence of distressing symptoms and the need for comprehensive assessment and targeted treatment.";
      } else {
        $scope.profileDescription = "Urgent Care Needed: This set identifies individuals requiring immediate attention and urgent mental health care. Their scores indicate severe symptoms, intense distress, impaired functioning, or potential crisis situations. Timely intervention and professional assistance are critical.";
      }
    };


    // Function to update progress bars based on fetched data
    $scope.updateProgressBars = function() {
      // Loop through the assessments and update the progress bars
      angular.forEach($scope.assessments, function(score, category) {
        const progressBar = document.getElementById(category + '-progress-bar');
        if (progressBar) {
          progressBar.style.width = score + '%';
        }
      });
    };

    // Call the fetchAssessmentData function when the controller loads
    $scope.fetchAssessmentData();
  });
