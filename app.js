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

    // Initialize the platform
    showcaseStudentProfiles();
    showcaseInvestorOpportunities();
    assessStudentPotential();
});
