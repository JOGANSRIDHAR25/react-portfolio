const projects = [
  {
    id: 1,
    featured: true,
    title: "FAER – Real-Time Disaster Information Aggregation System",
    description:
      "A real-time disaster information aggregation platform designed to collect, process, and display disaster-related data for faster decision-making and public awareness.",
    highlights: [
      "Real-time disaster alerts dashboard",
      "Interactive React-based frontend",
      "AWS cloud deployment & monitoring",
      "IAM-based secure access control",
      "CloudWatch for reliability tracking",
      "Real-world data collected from NDRF teams",
    ],
    tech: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "CloudWatch",
      "IAM",
    ],
  },

  {
    id: 2,
    featured: false,
    title: "Unisex Spa – Responsive Website",
    description:
      "A fully responsive business website for a unisex spa with separate sections for men and women.",
    highlights: [
      "Mobile-first responsive design",
      "Separate sections for men & women",
      "Clean UI and smooth navigation",
      "Cross-browser compatibility",
    ],
    tech: ["React", "HTML", "CSS", "JavaScript"],
  },

  {
    id: 3,
    featured: false,
    title: "Cloud-Based Web Application Deployment",
    description:
      "Deployment and management of a web application on AWS with monitoring and secure access control.",
    highlights: [
      "EC2 & S3 based deployment",
      "CloudWatch monitoring setup",
      "IAM role-based permissions",
      "Scalable and reliable architecture",
    ],
    tech: ["AWS EC2", "AWS S3", "CloudWatch", "IAM"],
  },
];

export default projects;
