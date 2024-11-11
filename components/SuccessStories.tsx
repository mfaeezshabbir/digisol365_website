import React from "react";

interface Story {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const stories: Story[] = [
  {
    title: "Building A Scalable Cloud Infrastructure",
    category: "Web Development",
    imageUrl:
      "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    link: "#",
  },
  {
    title: "Enhancing E-Commerce Platform Performance",
    category: "E-Commerce",
    imageUrl:
      "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    link: "#",
  },
  {
    title: "Revamping UX for Financial Services",
    category: "UI/UX Design",
    imageUrl:
      "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    link: "#",
  },
  {
    title: "Implementing AI in Customer Support",
    category: "Artificial Intelligence",
    imageUrl:
      "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    link: "#",
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="flex justify-between items-center mb-12">
        <div>
          <p className="text-buttoncolor text-sm font-semibold uppercase tracking-widest">
            Case Study
          </p>
          <h2 className="text-3xl font-bold mt-2">Success Stories</h2>
        </div>
        <a
          href="#"
          className="text-green-500 font-semibold border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-gray-900 transition"
        >
          View All Cases
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <div className="w-2/3 p-6">
              <p className="text-buttoncolor text-sm font-medium mb-1">
                {story.category}
              </p>
              <h3 className="text-xl font-bold mb-4">{story.title}</h3>
              <a
                href={story.link}
                className="text-foreground text-sm font-semibold flex items-center space-x-2 hover:text-green-500 transition"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H4a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="w-1/3">
              <img
                src={story.imageUrl}
                alt={story.title}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
