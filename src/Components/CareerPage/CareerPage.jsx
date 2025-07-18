// src/CareerPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import './CareerPage.css';

const CareerPage = () => {
  const [filters, setFilters] = useState({
    department: 'all',
    location: 'all',
    type: 'all'
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const jobsPerPage = 5;
  const navigate = useNavigate();

  const departments = ['all', 'Engineering', 'Design', 'Human Resources', 'Business Development', 'Marketing', 'Product', 'Operations'];
  const jobTypes = ['all', 'Full-time', 'Part-time', 'Contract', 'Internship'];
  const locations = ['all', 'Remote', 'Hybrid', 'Aurangabad (Chh. Shambhaji Nagar)'];

  const jobOpenings = [
    // Job openings data remains unchanged (omitted for brevity; use your provided data)
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead the development of our React-based applications with a focus on performance and accessibility.',
      responsibilities: [
        'Develop new user-facing features',
        'Build reusable components and front-end libraries',
        'Optimize applications for maximum speed and scalability',
        'Collaborate with UX designers and backend engineers'
      ],
      requirements: [
        '5+ years of React experience',
        'Strong proficiency in JavaScript, including ES6+',
        'Experience with state management (Redux, Context API)',
        'Familiarity with RESTful APIs and GraphQL'
      ]
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Create beautiful and intuitive user experiences for our digital products.',
      responsibilities: [
        'Design user flows, wireframes, and prototypes',
        'Conduct user research and usability testing',
        'Collaborate with product managers and engineers',
        'Maintain and evolve our design system'
      ],
      requirements: [
        '3+ years of UX/UI design experience',
        'Portfolio demonstrating strong design skills',
        'Proficiency in Figma or Sketch',
        'Understanding of front-end development principles'
      ]
    },
    {
      id: 3,
      title: 'HR Executive',
      department: 'Human Resources',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Manage our talent acquisition process and employee relations to foster a positive work environment.',
      responsibilities: [
        'Handle end-to-end recruitment process',
        'Coordinate interviews and onboarding programs',
        'Manage employee records and HR documentation',
        'Organize training and development initiatives',
        'Address employee queries regarding policies'
      ],
      requirements: [
        'Bachelor\'s degree in Human Resources or related field',
        '2+ years of HR experience',
        'Excellent communication and interpersonal skills',
        'Knowledge of labor laws and HR best practices',
        'Experience with HR software and tools'
      ]
    },
    {
      id: 4,
      title: 'Project Hunter/Freelancing Broker',
      department: 'Business Development',
      location: 'Remote',
      type: 'Contract',
      description: 'Identify and secure new freelance projects and business opportunities for our talent network.',
      responsibilities: [
        'Source and acquire new freelance projects',
        'Negotiate contracts with clients',
        'Match client requirements with suitable freelancers',
        'Maintain relationships with both clients and freelancers',
        'Track project milestones and payments'
      ],
      requirements: [
        'Proven experience in business development or sales',
        'Strong network in tech/freelance community',
        'Excellent negotiation and persuasion skills',
        'Ability to understand technical project requirements',
        'Self-motivated with entrepreneurial mindset'
      ]
    },
    {
      id: 5,
      title: 'AI Developer Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'Internship',
      description: 'Gain hands-on experience in developing AI solutions and machine learning models.',
      responsibilities: [
        'Assist in developing and training ML models',
        'Participate in data collection and preprocessing',
        'Support AI solution implementation',
        'Document research findings and code',
        'Attend team meetings and brainstorming sessions'
      ],
      requirements: [
        'Pursuing degree in Computer Science, AI, or related field',
        'Basic understanding of machine learning concepts',
        'Familiarity with Python and ML libraries (TensorFlow/PyTorch)',
        'Strong analytical and problem-solving skills',
        'Eagerness to learn new technologies'
      ]
    },
    {
      id: 6,
      title: 'Web Developer Intern',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Internship',
      description: 'Learn web development by working on real projects under expert guidance.',
      responsibilities: [
        'Assist in building and maintaining web applications',
        'Write clean, maintainable code',
        'Fix bugs and implement small features',
        'Participate in code reviews',
        'Learn and apply best practices'
      ],
      requirements: [
        'Pursuing degree in Computer Science or related field',
        'Basic knowledge of HTML, CSS, and JavaScript',
        'Familiarity with at least one web framework (React, Angular, Vue)',
        'Passion for web technologies',
        'Willingness to learn and grow'
      ]
    },
    {
      id: 7,
      title: 'Python Developer Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'Internship',
      description: 'Develop Python applications and scripts while learning industry best practices.',
      responsibilities: [
        'Write and test Python code',
        'Assist in developing backend services',
        'Participate in API development',
        'Help with data processing tasks',
        'Document code and processes'
      ],
      requirements: [
        'Pursuing degree in Computer Science or related field',
        'Basic knowledge of Python programming',
        'Understanding of OOP concepts',
        'Familiarity with Django/Flask is a plus',
        'Strong logical thinking abilities'
      ]
    },
    {
      id: 8,
      title: 'Java Developer Intern',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Internship',
      description: 'Learn enterprise Java development through hands-on project experience.',
      responsibilities: [
        'Assist in Java application development',
        'Participate in Spring Boot projects',
        'Write unit tests',
        'Help with debugging and troubleshooting',
        'Learn about microservices architecture'
      ],
      requirements: [
        'Pursuing degree in Computer Science or related field',
        'Basic knowledge of Java programming',
        'Understanding of data structures and algorithms',
        'Familiarity with Spring framework is a plus',
        'Attention to detail'
      ]
    },
    {
      id: 9,
      title: 'Technical Documentation Specialist',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create clear and comprehensive technical documentation for our products.',
      responsibilities: [
        'Write user manuals and API docs',
        'Collaborate with engineering teams',
        'Maintain documentation portal',
        'Simplify complex technical concepts',
        'Ensure documentation accuracy'
      ],
      requirements: [
        '2+ years technical writing',
        'Ability to understand technical concepts',
        'Excellent written English',
        'Experience with docs-as-code tools',
        'Attention to detail'
      ]
    },
    {
      id: 10,
      title: 'Engineering Project Coordinator',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Support engineering teams with project organization and coordination.',
      responsibilities: [
        'Schedule team meetings',
        'Track project milestones',
        'Facilitate cross-team communication',
        'Maintain project documentation',
        'Coordinate resource allocation'
      ],
      requirements: [
        '1+ year project coordination',
        'Basic understanding of SDLC',
        'Strong organizational skills',
        'Proficiency with JIRA/Asana',
        'Excellent communication'
      ]
    },
    {
      id: 11,
      title: 'Graphic Design Intern',
      department: 'Design',
      location: 'Hybrid',
      type: 'Internship',
      description: 'Learn professional design skills while creating visual assets for our products.',
      responsibilities: [
        'Assist with marketing materials',
        'Create social media graphics',
        'Support UI design projects',
        'Participate in design reviews',
        'Maintain design system'
      ],
      requirements: [
        'Pursuing design degree',
        'Basic Adobe Creative Suite skills',
        'Creative portfolio',
        'Eagerness to learn',
        'Attention to detail'
      ]
    },
    {
      id: 12,
      title: 'UX Research Intern',
      department: 'Design',
      location: 'Remote',
      type: 'Internship',
      description: 'Gain hands-on experience conducting user research for digital products.',
      responsibilities: [
        'Assist with user interviews',
        'Help analyze research data',
        'Create research summaries',
        'Participate in usability tests',
        'Document findings'
      ],
      requirements: [
        'Psychology/HCI student',
        'Interest in UX design',
        'Basic research knowledge',
        'Good communication skills',
        'Curious mindset'
      ]
    },
    {
      id: 13,
      title: 'Digital Marketing Intern',
      department: 'Marketing',
      location: 'Remote',
      type: 'Internship',
      description: 'Learn digital marketing strategies while supporting our campaigns.',
      responsibilities: [
        'Assist with social media',
        'Help create marketing content',
        'Support email campaigns',
        'Analyze campaign metrics',
        'Research market trends'
      ],
      requirements: [
        'Marketing/business student',
        'Basic social media knowledge',
        'Creative thinking',
        'Analytical mindset',
        'Willingness to learn'
      ]
    },
    {
      id: 14,
      title: 'Brand Marketing Specialist',
      department: 'Marketing',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Develop and maintain our brand identity across all channels.',
      responsibilities: [
        'Create brand guidelines',
        'Ensure visual consistency',
        'Develop brand campaigns',
        'Collaborate with designers',
        'Analyze brand perception'
      ],
      requirements: [
        '3+ years brand marketing',
        'Strong creative vision',
        'Experience with brand strategy',
        'Excellent communication',
        'Portfolio of work'
      ]
    },
    {
      id: 15,
      title: 'Product Operations Intern',
      department: 'Product',
      location: 'Hybrid',
      type: 'Internship',
      description: 'Support product teams with operational tasks and process improvements.',
      responsibilities: [
        'Help organize product docs',
        'Assist with user feedback analysis',
        'Support roadmap planning',
        'Participate in product meetings',
        'Help track key metrics'
      ],
      requirements: [
        'Business/tech student',
        'Organizational skills',
        'Basic analytics knowledge',
        'Interest in product management',
        'Detail-oriented'
      ]
    },
    {
      id: 16,
      title: 'Product Marketing Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Bridge the gap between product and marketing teams.',
      responsibilities: [
        'Develop go-to-market strategies',
        'Create product messaging',
        'Train sales teams',
        'Analyze competitive landscape',
        'Coordinate product launches'
      ],
      requirements: [
        '3+ years product marketing',
        'Technical product understanding',
        'Excellent presentation skills',
        'Market research experience',
        'Cross-functional collaboration'
      ]
    },
    {
      id: 17,
      title: 'Business Operations Intern',
      department: 'Operations',
      location: 'Hybrid',
      type: 'Internship',
      description: 'Learn about business operations while supporting various departments.',
      responsibilities: [
        'Assist with process documentation',
        'Help analyze operational data',
        'Support cross-team initiatives',
        'Participate in strategy sessions',
        'Contribute to process improvements'
      ],
      requirements: [
        'Business administration student',
        'Basic Excel skills',
        'Analytical thinking',
        'Eagerness to learn',
        'Problem-solving attitude'
      ]
    },
    {
      id: 18,
      title: 'Office Coordinator',
      department: 'Operations',
      location: 'Aurangabad (Chh. Shambhaji Nagar)',
      type: 'Full-time',
      description: 'Ensure smooth office operations and support our hybrid work environment.',
      responsibilities: [
        'Manage office supplies',
        'Coordinate meetings/events',
        'Support HR with onboarding',
        'Handle vendor relations',
        'Maintain office systems'
      ],
      requirements: [
        '1+ year office admin experience',
        'Strong organizational skills',
        'Excellent communication',
        'Proficiency with office software',
        'Multitasking ability'
      ]
    },
    {
      id: 19,
      title: 'HR Intern',
      department: 'Human Resources',
      location: 'Hybrid',
      type: 'Internship',
      description: 'Learn HR fundamentals while supporting recruitment and employee engagement.',
      responsibilities: [
        'Assist with recruitment process',
        'Help organize HR events',
        'Support onboarding activities',
        'Maintain HR records',
        'Participate in HR projects'
      ],
      requirements: [
        'HR/business student',
        'Interest in people operations',
        'Discretion with confidential info',
        'Good interpersonal skills',
        'Organizational ability'
      ]
    },
    {
      id: 20,
      title: 'Learning & Development Specialist',
      department: 'Human Resources',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop and implement employee training programs.',
      responsibilities: [
        'Assess training needs',
        'Design learning programs',
        'Coordinate workshops',
        'Evaluate program effectiveness',
        'Curate learning resources'
      ],
      requirements: [
        '3+ years L&D experience',
        'Instructional design knowledge',
        'Excellent facilitation skills',
        'Understanding of adult learning',
        'Creative approach to training'
      ]
    },
    {
      id: 21,
      title: 'Automation Engineering Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'Internship',
      description: 'Gain hands-on experience in automation engineering and process optimization.',
      responsibilities: [
        'Assist in developing automation scripts',
        'Participate in testing automated systems',
        'Document automation processes',
        'Support continuous integration pipelines',
        'Collaborate with engineering teams'
      ],
      requirements: [
        'Pursuing degree in Computer/Electrical Engineering',
        'Basic knowledge of Python or similar scripting language',
        'Understanding of automation concepts',
        'Strong problem-solving skills',
        'Eagerness to learn industrial automation'
      ]
    },
    {
      id: 22,
      title: 'Embedded Engineering Intern',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Internship',
      description: 'Work on embedded systems development for various hardware platforms.',
      responsibilities: [
        'Assist in firmware development',
        'Participate in hardware testing',
        'Debug embedded systems',
        'Document development processes',
        'Support IoT projects'
      ],
      requirements: [
        'Pursuing degree in EE/ECE/CS',
        'Basic C/C++ programming knowledge',
        'Familiarity with microcontrollers',
        'Understanding of electronics fundamentals',
        'Passion for embedded systems'
      ]
    },
    {
      id: 23,
      title: 'Video Editor Intern',
      department: 'Design',
      location: 'Remote',
      type: 'Internship',
      description: 'Create engaging video content for marketing and training purposes.',
      responsibilities: [
        'Edit raw footage into polished videos',
        'Add effects, graphics and sound',
        'Ensure brand consistency',
        'Optimize videos for different platforms',
        'Collaborate with marketing team'
      ],
      requirements: [
        'Experience with Adobe Premiere/Final Cut',
        'Basic motion graphics skills',
        'Creative storytelling ability',
        'Attention to detail',
        'Portfolio of previous work'
      ]
    },
    {
      id: 24,
      title: 'Firmware Engineering Intern',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Internship',
      description: 'Develop and test firmware for various hardware devices.',
      responsibilities: [
        'Assist in firmware coding',
        'Participate in testing and debugging',
        'Document firmware processes',
        'Support hardware integration',
        'Learn about RTOS development'
      ],
      requirements: [
        'Pursuing degree in CS/EE/ECE',
        'Basic C programming knowledge',
        'Understanding of embedded systems',
        'Familiarity with version control',
        'Problem-solving mindset'
      ]
    },
    {
      id: 25,
      title: 'Robotics Engineering Intern',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Internship',
      description: 'Work on robotics projects including design, programming and testing.',
      responsibilities: [
        'Assist in robot programming',
        'Participate in mechanical testing',
        'Support sensor integration',
        'Document development processes',
        'Collaborate on automation projects'
      ],
      requirements: [
        'Pursuing degree in Robotics/ME/EE',
        'Basic Python/C++ knowledge',
        'Understanding of robotics concepts',
        'Familiarity with ROS is a plus',
        'Passion for robotics technology'
      ]
    },
    {
      id: 26,
      title: 'Business Development Officer (College Representative)',
      department: 'Business Development',
      location: 'Remote',
      type: 'Part-time',
      description: 'Represent our company in your college and help promote our programs.',
      responsibilities: [
        'Promote company initiatives on campus',
        'Organize information sessions',
        'Identify potential partnerships',
        'Gather student feedback',
        'Support recruitment activities'
      ],
      requirements: [
        'Currently enrolled in college',
        'Strong communication skills',
        'Active in student organizations',
        'Entrepreneurial mindset',
        'Social media savvy'
      ]
    },
    {
      id: 27,
      title: 'Android Developer Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'Internship',
      description: 'Learn Android app development while working on real projects.',
      responsibilities: [
        'Assist in app development',
        'Fix bugs and implement features',
        'Learn best practices',
        'Participate in code reviews',
        'Document development processes'
      ],
      requirements: [
        'Pursuing CS/IT degree',
        'Basic Java/Kotlin knowledge',
        'Understanding of Android SDK',
        'Familiarity with Android Studio',
        'Passion for mobile development'
      ]
    },
    {
      id: 28,
      title: 'Frontend Developer Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'Internship',
      description: 'Build user interfaces and learn modern frontend development.',
      responsibilities: [
        'Implement UI components',
        'Fix frontend bugs',
        'Learn React best practices',
        'Participate in design reviews',
        'Optimize web performance'
      ],
      requirements: [
        'Pursuing CS/IT degree',
        'Basic HTML/CSS/JS knowledge',
        'Familiarity with React is a plus',
        'Attention to design details',
        'Eagerness to learn'
      ]
    },
    {
      id: 29,
      title: 'Backend Developer Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'Internship',
      description: 'Work on server-side development and API creation.',
      responsibilities: [
        'Assist in API development',
        'Participate in database design',
        'Learn about cloud services',
        'Support backend testing',
        'Document code'
      ],
      requirements: [
        'Pursuing CS/IT degree',
        'Basic programming knowledge',
        'Understanding of databases',
        'Familiarity with Node.js/Python',
        'Logical thinking skills'
      ]
    },
    {
      id: 30,
      title: 'Syllabus Designer Intern',
      department: 'Operations',
      location: 'Remote',
      type: 'Internship',
      description: 'Help design and improve training curricula for various programs.',
      responsibilities: [
        'Research industry trends',
        'Assist in curriculum development',
        'Organize learning materials',
        'Evaluate course effectiveness',
        'Suggest improvements'
      ],
      requirements: [
        'Strong research skills',
        'Excellent writing ability',
        'Understanding of pedagogy',
        'Attention to detail',
        'Interest in education technology'
      ]
    },
    {
      id: 31,
      title: 'Industrial Training Expert',
      department: 'Operations',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Develop and deliver technical training programs for corporate clients.',
      responsibilities: [
        'Design training modules',
        'Conduct technical workshops',
        'Evaluate training effectiveness',
        'Update course materials',
        'Mentor junior trainers'
      ],
      requirements: [
        '3+ years technical training experience',
        'Strong presentation skills',
        'Industry certifications preferred',
        'Patience and teaching ability',
        'Willingness to travel'
      ]
    }

  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries, equity, and performance bonuses.',
      icon: '💰'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.',
      icon: '🏥'
    },
    {
      title: 'Flexible Work',
      description: 'Remote-friendly with flexible hours to support work-life balance.',
      icon: '🏡'
    },
    {
      title: 'Learning Budget',
      description: 'Annual stipend for conferences, courses, and professional development.',
      icon: '📚'
    },
    {
      title: 'Generous Time Off',
      description: 'Unlimited PTO plus company-wide holidays and mental health days.',
      icon: '🌴'
    },
    {
      title: 'Team Culture',
      description: 'Regular team events, retreats, and a collaborative work environment.',
      icon: '👥'
    }
  ];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Show scroll button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredJobs = jobOpenings.filter(job => {
    return (
      (filters.department === 'all' || job.department === filters.department) &&
      (filters.location === 'all' || job.location === filters.location) &&
      (filters.type === 'all' || job.type === filters.type)
    );
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80
    });
  };

  const handleApplyNow = (jobTitle) => {
    closeModal();
    navigate('/apply', {
      state: {
        jobTitle: jobTitle
      }
    });
  };

  return (
    <div className="career-page">
      {/* Scroll to top button */}
      {showScrollButton && (
        <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowUp />
        </button>
      )}

      {/* Hero Section */}
      <section className="career-hero" id="career-hero">
        <div className="hero-content">
          <h1>Shape the Future With Us</h1>
          <p className="hero-subtitle">We're on a mission to build innovative solutions, and we need talented people like you to join our team.</p>
          <div className="hero-cta-container">
            <button
              className="cta-button"
              onClick={() => scrollToSection('job-openings')}
            >
              Explore Openings
            </button>
            <button
              className="cta-button secondary"
              onClick={() => scrollToSection('career-benefits')}
            >
              Our Benefits
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-us" id="career-benefits">
        <div className="section-header">
          <h2>Why You'll Love Working Here</h2>
          <p className="section-subtitle">We're committed to creating an environment where you can do your best work and grow your career.</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="job-openings" id="job-openings">
        <div className="section-header">
          <h2>Current Openings</h2>
          <p className="section-subtitle">Find the perfect role for your skills and interests.</p>
        </div>

        <div className="job-filters">
          <div className="filter-group">
            <label htmlFor="department">Department</label>
            <select
              id="department"
              value={filters.department}
              onChange={(e) => handleFilterChange('department', e.target.value)}
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="location">Location</label>
            <select
              id="location"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>
                  {loc === 'all' ? 'All Locations' : loc}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="type">Job Type</label>
            <select
              id="type"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              {jobTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="jobs-list">
          {currentJobs.length > 0 ? (
            <>
              {currentJobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <div className="job-meta-tags">
                      <span className="job-department">{job.department}</span>
                      <span className="job-location">{job.location}</span>
                      <span className="job-type">{job.type}</span>
                    </div>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <div className="job-actions">
                    <button
                      className="apply-button"
                      onClick={() => handleJobSelect(job)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}

              {/* Pagination controls */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="pagination-button"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`pagination-button ${currentPage === number ? 'active' : ''}`}
                    >
                      {number}
                    </button>
                  ))}

                  <button
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="pagination-button"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="no-jobs-message">
              <p>No jobs match your selected filters. Try adjusting your criteria.</p>
              <button
                className="reset-filters"
                onClick={() => setFilters({
                  department: 'all',
                  location: 'all',
                  type: 'all'
                })}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Application CTA */}
      <section className="application-cta" id="career-apply">
        <div className="cta-content">
          <h2>Ready to Join Our Team?</h2>
          <p>Even if you don't see the perfect role listed, we'd love to hear from you. We're always looking for talented people.</p>
          <div className="cta-buttons">
            <button
              className="cta-button"
              onClick={() => scrollToSection('job-openings')}
            >
              Browse Openings
            </button>
            <Link
              to="/contact"
              className="cta-button secondary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {showModal && selectedJob && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="job-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
            >
              ×
            </button>
            <h2>{selectedJob.title}</h2>
            <div className="job-meta-tags">
              <span>{selectedJob.department}</span>
              <span>{selectedJob.location}</span>
              <span>{selectedJob.type}</span>
            </div>

            <div className="job-details-section">
              <h3>About the Role</h3>
              <p>{selectedJob.description}</p>
            </div>

            <div className="job-details-section">
              <h3>Responsibilities</h3>
              <ul>
                {selectedJob.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="job-details-section">
              <h3>Requirements</h3>
              <ul>
                {selectedJob.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-actions">
              <button
                className="cta-button"
                onClick={() => handleApplyNow(selectedJob.title)}
              >
                Apply Now
              </button>
              <button
                className="cta-button secondary"
                onClick={closeModal}
              >
                Back to Listings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;