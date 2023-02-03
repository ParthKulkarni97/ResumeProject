const applicants = [
  {
    name: 'John Doe',
    job: 'Software Engineer',
    email: 'johndoe@email.com',
    phone: '1234567890'
  },
  {
    name: 'Jane Doe',
    job: 'Web Developer',
    email: 'janedoe@email.com',
    phone: '0987654321'
  },
  {
    name: 'Jim Smith',
    job: 'Software Engineer',
    email: 'jimsmith@email.com',
    phone: '1357902468'
  }
];

fetch('applicants.json')
  .then((res) => res.json())
  .then((data) => {
    applicants.push(...data);
    displayApplications(applicants);
  });

const applicationsContainer = document.querySelector('#applications');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const searchInput = document.querySelector('#search');
const message = document.querySelector('#message');

let currentIndex = 0;

const displayApplications = (applications) => {
applicationsContainer.innerHTML = '';

if (applications.length === 0) {
message.innerText = 'Invalid search or No applications for this job';
prevButton.classList.add('hidden');
nextButton.classList.add('hidden');
return;
}

message.innerText = '';
prevButton.classList.remove('hidden');
nextButton.classList.remove('hidden');

if (applications.length === 1) {
prevButton.classList.add('hidden');
nextButton.classList.add('hidden');
}

if (currentIndex === 0) {
prevButton.classList.add('hidden');
}

if (currentIndex === applications.length - 1) {
nextButton.classList.add('hidden');
}

const application = applications[currentIndex];
applicationsContainer.innerHTML = <div class="applicant"> <p>Name: ${application.name}</p> <p>Job: ${application.job}</p> <p>Experience: ${application.experience} years</p> </div> ;
};

const searchApplications = (event) => {
const job = event.target.value.toLowerCase();
let filteredApplications = applicants.filter((application) => {
return application.job.toLowerCase().includes(job);
});

currentIndex = 0;
displayApplications(filteredApplications);
};

prevButton.addEventListener('click', () => {
currentIndex--;
displayApplications(applicants);
});

nextButton.addEventListener('click', () => {
currentIndex++;
displayApplications(applicants);
});

searchInput.addEventListener('input', searchApplications);



