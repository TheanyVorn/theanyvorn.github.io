// Scroll-based fade-in animation
const faders = document.querySelectorAll('.fade-in');
if (faders.length > 0) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    faders.forEach(fade => observer.observe(fade));
}

// Theme toggle
document.querySelectorAll('.theme-toggle').forEach(toggleBtn => {
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const icon = toggleBtn.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
        }
    });
});

// Back to top
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 300);
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Set default theme to light mode on page load
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('light-mode');
});

// Loader
const loader = document.querySelector('.loader');
if (loader) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('loader-hidden');
        }, 2000);
    });
}

// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// Experience data with images and descriptions
const experienceData = {
    'phum-impact': {
        title: 'Design Thinking Hackathon - Phum Impact',
        images: [
            'img/PhumImpact.png',
            'img/phum-impact-2.jpg',
            'img/phum-impact-3.jpg'
        ],
        description: `
            <p>Participated in an intensive 4-day Design Thinking Hackathon focused on creating innovative solutions for rural development challenges in Cambodia. This experience enhanced my problem-solving skills and collaborative approach to addressing real-world issues.</p>
            <p><strong>Key Achievements:</strong></p>
            <ul>
                <li>Developed a comprehensive solution for rural community development</li>
                <li>Collaborated with diverse teams from different backgrounds</li>
                <li>Applied design thinking methodology to solve complex problems</li>
                <li>Presented innovative ideas to industry experts and judges</li>
            </ul>
        `
    },
    'odc-camp': {
        title: 'Cambodia ICT Camp - Open Development Center',
        images: [
            'img/odc-camp-1.jpg',
            'img/odc-camp-2.jpg',
            'img/odc-camp-3.jpg'
        ],
        description: `
            <p>Participated in a comprehensive ICT training camp that focused on digital literacy, technology skills, and innovation in Cambodia's tech ecosystem.</p>
            <p><strong>Skills Developed:</strong></p>
            <ul>
                <li>Advanced digital literacy and technology skills</li>
                <li>Understanding of Cambodia's ICT landscape</li>
                <li>Networking with tech professionals and peers</li>
                <li>Hands-on experience with emerging technologies</li>
            </ul>
        `
    },
    'cadt-training': {
        title: 'Khoding Hero Trainer - CADT',
        images: [
            'img/khodinghero-cadt-1.jpg',
            'img/khodinghero-cadt-2.jpg',
            'img/khodinghero-cadt-3.jpg',
            'img/khodinghero-cadt-4.jpg'
        ],
        description: `
            <p>Served as a Khoding Hero Trainer, teaching programming and technology skills to students and community members. This role developed my leadership and teaching abilities.</p>
            <p><strong>Responsibilities:</strong></p>
            <ul>
                <li>Conducted programming workshops and training sessions</li>
                <li>Mentored students in coding and problem-solving</li>
                <li>Developed curriculum and training materials</li>
                <li>Fostered a collaborative learning environment</li>
            </ul>
        `
    },
    'nicc-startup': {
        title: 'NICC 11th Startup Camp (ICT) - NICC',
        images: [
            'img/nicc-startup-1.jpg',
            'img/nicc-startup-2.jpg',
            'img/nicc-startup-3.jpg'
        ],
        description: `
            <p>Completed an intensive startup incubation program focusing on ICT entrepreneurship, business development, and innovation in the Cambodian startup ecosystem.</p>
            <p><strong>Program Highlights:</strong></p>
            <ul>
                <li>Learned startup fundamentals and business model development</li>
                <li>Pitched innovative ICT solutions to investors</li>
                <li>Networked with successful entrepreneurs and mentors</li>
                <li>Gained insights into the Cambodian startup landscape</li>
            </ul>
        `
    },
    'aiesec-impact': {
        title: 'Impact Day 2024 - AIESEC in LUCT',
        images: [
            'img/aiesec-impact-1.jpg',
            'img/aiesec-impact-2.jpg',
            'img/aiesec-impact-3.jpg',
            'img/aiesec-impact-4.jpg'
        ],
        description: `
            <p>Served as Organizing Committee Manager for Impact Day 2024, leading a team to create meaningful social impact initiatives and community engagement programs.</p>
            <p><strong>Leadership Achievements:</strong></p>
            <ul>
                <li>Managed a diverse team of volunteers and organizers</li>
                <li>Coordinated logistics for large-scale community event</li>
                <li>Developed partnerships with local organizations</li>
                <li>Successfully executed impactful community programs</li>
            </ul>
        `
    }
};

// Modal functionality
function openModal(experienceId, event) {
    // Prevent any default behavior
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const modal = document.getElementById('experienceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalGallery = document.getElementById('modalGallery');
    const modalDescription = document.getElementById('modalDescription');

    const experience = experienceData[experienceId];

    if (experience) {
        modalTitle.textContent = experience.title;
        modalDescription.innerHTML = experience.description;

        // Clear and populate gallery
        modalGallery.innerHTML = '';
        experience.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = experience.title;
            img.className = 'modal-image';
            img.onclick = (e) => {
                e.stopPropagation();
                openImageViewer(imageSrc);
            };

            // Handle image load errors gracefully
            img.onerror = () => {
                img.style.display = 'none';
            };

            modalGallery.appendChild(img);
        });

        // Show modal with smooth animation
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Focus trap for accessibility
        modal.focus();
    }

    return false; // Ensure no navigation occurs
}

function closeModal() {
    const modal = document.getElementById('experienceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function openImageViewer(imageSrc) {
    const viewer = document.getElementById('imageViewer');
    const viewerImage = document.getElementById('viewerImage');

    viewerImage.src = imageSrc;
    viewer.style.display = 'block';
}

function closeImageViewer() {
    const viewer = document.getElementById('imageViewer');
    viewer.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('experienceModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
        closeImageViewer();
    }
});