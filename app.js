document.addEventListener('DOMContentLoaded', function() {
    // Function to showcase student profiles
    function showcaseStudentProfiles() {
        const profiles = [
            {
                name: 'John Doe',
                achievements: 'Graduated with honors in Computer Science',
                aspirations: 'To become a software engineer at a top tech company',
                fundingNeeds: '£20,000 for tuition and living expenses'
            },
            {
                name: 'Jane Smith',
                achievements: 'Published research in international journals',
                aspirations: 'To pursue a PhD in Biomedical Engineering',
                fundingNeeds: '£25,000 for research and living expenses'
            }
        ];

        const profilesContainer = document.getElementById('student-profiles');
        profiles.forEach(profile => {
            const profileElement = document.createElement('div');
            profileElement.classList.add('profile');
            profileElement.innerHTML = `
                <h3>${profile.name}</h3>
                <p><strong>Achievements:</strong> ${profile.achievements}</p>
                <p><strong>Aspirations:</strong> ${profile.aspirations}</p>
                <p><strong>Funding Needs:</strong> ${profile.fundingNeeds}</p>
            `;
            profilesContainer.appendChild(profileElement);
        });
    }

    // Function to showcase investor opportunities
    function showcaseInvestorOpportunities() {
        const opportunities = [
            {
                type: 'Donation',
                description: 'Donate directly to support a student’s education without expecting returns.'
            },
            {
                type: 'Loan',
                description: 'Negotiate loan terms with students, offering tailored terms without requiring collateral or credit scores.'
            }
        ];

        const opportunitiesContainer = document.getElementById('investor-opportunities');
        opportunities.forEach(opportunity => {
            const opportunityElement = document.createElement('div');
            opportunityElement.classList.add('opportunity');
            opportunityElement.innerHTML = `
                <h3>${opportunity.type}</h3>
                <p>${opportunity.description}</p>
            `;
            opportunitiesContainer.appendChild(opportunityElement);
        });
    }

    // Function to implement a basic assessment process
    function assessStudentPotential() {
        const assessmentCriteria = [
            'CV',
            'Past work experiences',
            'Written samples',
            'Interviews'
        ];

        const assessmentContainer = document.getElementById('assessment-process');
        const criteriaList = document.createElement('ul');
        assessmentCriteria.forEach(criteria => {
            const criteriaItem = document.createElement('li');
            criteriaItem.textContent = criteria;
            criteriaList.appendChild(criteriaItem);
        });
        assessmentContainer.appendChild(criteriaList);
    }

    // Function to navigate between pages
    function navigateToPage(page) {
        window.location.href = page;
    }

    // Add event listeners to navigation links
    document.querySelector('nav ul li a[href="student-profiles.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage('student-profiles.html');
    });

    document.querySelector('nav ul li a[href="investor-opportunities.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage('investor-opportunities.html');
    });

    document.querySelector('nav ul li a[href="assessment.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage('assessment.html');
    });

    document.querySelector('nav ul li a[href="why-it-matters.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage('why-it-matters.html');
    });

    // Function to handle the call-to-action button click event in the hero section
    function handleCTAClick() {
        window.location.href = 'student-profiles.html';
    }

    // Function to dynamically load testimonials from a predefined array
    function loadTestimonials() {
        const testimonials = [
            {
                quote: "Keystone helped me achieve my dream of studying abroad. I couldn't have done it without their support!",
                author: "John Doe, Student"
            },
            {
                quote: "Investing in students through Keystone has been a rewarding experience. I'm proud to support their education.",
                author: "Jane Smith, Investor"
            }
        ];

        const testimonialsContainer = document.getElementById('testimonials');
        testimonials.forEach(testimonial => {
            const testimonialElement = document.createElement('div');
            testimonialElement.classList.add('testimonial');
            testimonialElement.innerHTML = `
                <p>"${testimonial.quote}"</p>
                <p>- ${testimonial.author}</p>
            `;
            testimonialsContainer.appendChild(testimonialElement);
        });
    }
    // Function to dynamically load additional student profiles
    function loadMoreProfiles() {
        const additionalProfiles = [
            {
                name: 'Alice Johnson',
                achievements: 'Top scorer in Mathematics Olympiad',
                aspirations: 'To pursue a degree in Data Science',
                fundingNeeds: '£15,000 for tuition and living expenses'
            },
            {
                name: 'Bob Brown',
                achievements: 'Winner of National Science Fair',
                aspirations: 'To become a research scientist in Physics',
                fundingNeeds: '£18,000 for research and living expenses'
            }
        ];

        const profilesContainer = document.getElementById('student-profiles');
        additionalProfiles.forEach(profile => {
            const profileElement = document.createElement('div');
            profileElement.classList.add('profile');
            profileElement.innerHTML = `
                <h3>${profile.name}</h3>
                <p><strong>Achievements:</strong> ${profile.achievements}</p>
                <p><strong>Aspirations:</strong> ${profile.aspirations}</p>
                <p><strong>Funding Needs:</strong> ${profile.fundingNeeds}</p>
            `;
            profilesContainer.appendChild(profileElement);
        });
    }

    // Add event listener to "Load More" button
    document.getElementById('load-more-button').addEventListener('click', loadMoreProfiles);

    // Function to add hover effects to profile cards
    function addHoverEffects() {
        const profileCards = document.querySelectorAll('.profile');
        profileCards.forEach(card => {
            card.addEventListener('mouseover', () => {
                card.style.transform = 'translateY(-5px)';
            });
            card.addEventListener('mouseout', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    // Function to add animations to profile cards
    function addProfileCardAnimations() {
        const profileCards = document.querySelectorAll('.profile');
        profileCards.forEach(card => {
            card.style.animation = 'slideIn 0.5s ease-in-out';
        });
    }

    // Function to enhance the profile pop-up with a slide-in effect and smooth scroll back
    function enhanceProfilePopup() {
        const profileModal = document.getElementById('profile-modal');
        const closeButton = document.querySelector('.close-button');

        closeButton.addEventListener('click', () => {
            profileModal.style.display = 'none';
            window.scrollTo({
                top: document.documentElement.scrollTop,
                behavior: 'smooth'
            });
        });
    }

    // Function to implement a sticky navigation menu with smooth scrolling effects
    function implementStickyNavigation() {
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
    // Function to implement a sticky navigation menu
    function implementStickyNav() {
        const nav = document.querySelector('nav');
        const sticky = nav.offsetTop;

        window.onscroll = function() {
            if (window.pageYOffset >= sticky) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        });

        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });
        };
    // Function to toggle the collapsible or hamburger menu for mobile responsiveness
    function toggleMenu() {
        const nav = document.querySelector('nav ul');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    }

    // Add event listener to the hamburger menu
    document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);

    // Function to add animations or interactive elements
    function addAnimations() {
        const elements = document.querySelectorAll('.profile-card, .opportunity, .testimonial');
        elements.forEach(element => {
            element.style.animation = 'fadeIn 1s ease-in';
        });
    }

    // Function to dynamically load additional student profiles
    function loadMoreProfiles() {
        const additionalProfiles = [
            {
                name: 'Alice Johnson',
                achievements: 'Top scorer in Mathematics Olympiad',
                aspirations: 'To pursue a degree in Data Science',
                fundingNeeds: '£15,000 for tuition and living expenses'
            },
            {
                name: 'Bob Brown',
                achievements: 'Winner of National Science Fair',
                aspirations: 'To become a research scientist in Physics',
                fundingNeeds: '£18,000 for research and living expenses'
            }
        ];

        const profilesContainer = document.getElementById('student-profiles');
        additionalProfiles.forEach(profile => {
            const profileElement = document.createElement('div');
            profileElement.classList.add('profile');
            profileElement.innerHTML = `
                <h3>${profile.name}</h3>
                <p><strong>Achievements:</strong> ${profile.achievements}</p>
                <p><strong>Aspirations:</strong> ${profile.aspirations}</p>
                <p><strong>Funding Needs:</strong> ${profile.fundingNeeds}</p>
            `;
            profilesContainer.appendChild(profileElement);
        });
    }

    // Add event listener to "Load More" button
    document.getElementById('load-more-button').addEventListener('click', loadMoreProfiles);

    // Function to add hover effects to profile cards
    function addHoverEffects() {
        const profileCards = document.querySelectorAll('.profile');
        profileCards.forEach(card => {
            card.addEventListener('mouseover', () => {
                card.style.transform = 'translateY(-5px)';
            });
            card.addEventListener('mouseout', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    // Function to add animations to profile cards
    function addProfileCardAnimations() {
        const profileCards = document.querySelectorAll('.profile');
        profileCards.forEach(card => {
            card.style.animation = 'slideIn 0.5s ease-in-out';
        });
    }

    // Function to enhance the profile pop-up with a slide-in effect and smooth scroll back
    function enhanceProfilePopup() {
        const profileModal = document.getElementById('profile-modal');
        const closeButton = document.querySelector('.close-button');

        closeButton.addEventListener('click', () => {
            profileModal.style.display = 'none';
            window.scrollTo({
                top: document.documentElement.scrollTop,
                behavior: 'smooth'
            });
        });
    }

    // Function to implement a sticky navigation menu with smooth scrolling effects
    function implementStickyNavigation() {
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        });

        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });
    }

    // Initialize the platform
    showcaseStudentProfiles();
    showcaseInvestorOpportunities();
    assessStudentPotential();
    loadTestimonials();
    addHoverEffects();
    addProfileCardAnimations();
    enhanceProfilePopup();
    implementStickyNavigation();
    implementStickyNav();
    addAnimations();
});
