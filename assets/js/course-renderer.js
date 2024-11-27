document.addEventListener('DOMContentLoaded', function() {
    // Fetch the courses configuration
    fetch('/starcode-courses/config/courses.json')
      .then(response => response.json())
      .then(data => {
        const mainContent = document.querySelector('.content');
        
        // Clear existing content
        mainContent.innerHTML = '';
        
        // Iterate through categories
        data.categories.forEach(category => {
          // Create section for each category
          const section = document.createElement('section');
          section.id = category.id;
          
          // Create category title
          const categoryTitle = document.createElement('h2');
          categoryTitle.textContent = category.title;
          section.appendChild(categoryTitle);
          
          // Create grid for courses
          const grid = document.createElement('div');
          grid.className = 'grid';
          
          // Create course cards
          category.courses.forEach(course => {
            const courseCard = document.createElement('a');
            courseCard.href = course.githubLink;
            courseCard.className = 'course-card';
            
            // Course image
            const courseImage = document.createElement('img');
            courseImage.src = course.image;
            courseImage.alt = course.title;
            courseCard.appendChild(courseImage);
            
            // Course title
            const courseTitle = document.createElement('h3');
            courseTitle.textContent = course.title;
            courseCard.appendChild(courseTitle);
            
            // Course description
            const courseDescription = document.createElement('p');
            courseDescription.textContent = course.description;
            courseCard.appendChild(courseDescription);
            
            grid.appendChild(courseCard);
          });
          
          section.appendChild(grid);
          mainContent.appendChild(section);
        });
      })
      .catch(error => console.error('Error loading courses:', error));
  });