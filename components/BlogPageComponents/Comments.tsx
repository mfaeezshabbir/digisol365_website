"use client";
import React, { useState, FormEvent, useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";

// Define the types for comment data
interface Comment {
  id: number;
  userId: string;
  username: string;
  comment: string;
  // date: string;
}

function Comments() {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [loggedInUser, setLoggedInUser] = useState<string>("User1"); // Simulate logged-in user
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedComment, setEditedComment] = useState<string>("");
  const [deleteCommentId, setDeleteCommentId] = useState<number | null>(null);
  // const [date, setDate] = useState<string | null>(null); // Use null initially
  const [loading, setLoading] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false); // Track if the component has mounted

  // useEffect(() => {
  //   setIsMounted(true); // Mark as mounted once the component is ready to render
  //   // setDate(new Date().toLocaleDateString()); // Set the date after the component mounts
  //   setLoading(false);
  // }, []);

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (name && comment) {
      const newComment: Comment = {
        id: comments.length + 1, // Simple id generation
        userId: loggedInUser,
        username: name,
        comment,
        // date: date || "", // Handle null date
      };

      setComments([newComment, ...comments]);
      setName("");
      setComment("");
    }
  };

  const handleDelete = () => {
    if (deleteCommentId !== null) {
      setComments(comments.filter((comment) => comment.id !== deleteCommentId));
      setDeleteCommentId(null);
    }
  };

  const handleEdit = (commentId: number) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setEditingCommentId(commentId);
      setEditedComment(commentToEdit.comment);
    }
  };

  const handleUpdate = () => {
    if (editingCommentId !== null) {
      setComments(
        comments.map((comment) =>
          comment.id === editingCommentId
            ? { ...comment, comment: editedComment }
            : comment
        )
      );
      setEditingCommentId(null);
      setEditedComment("");
    }
  };

  return (
    <div>
      <section className="bg-background py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg lg:text-2xl font-bold text-foreground">
              Discussion ({comments.length})
            </h2>
          </div>

          {/* Comment Form */}
          <form className="mb-10" onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 text-sm text-foreground bg-background border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                id="comment"
                rows={6}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-4 text-sm text-foreground bg-card border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                placeholder="Write a comment..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center py-2.5 px-6 text-sm font-medium text-foreground bg-buttoncolor rounded-lg shadow-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 hover:bg-buttoncolorhover transition-colors"
            >
              Post comment
            </button>
          </form>

          {/* Render Comments */}
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="p-6 mb-6 bg-background border border-gray-200 rounded-lg shadow-md"
            >
              <footer className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt={comment.username}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {comment.username}
                    </p>
                    <p className="text-xs text-foreground">{"ad"}</p>
                  </div>
                </div>

                {/* Edit and Delete buttons */}
                {loggedInUser === comment.userId && (
                  <div className="flex space-x-2">
                    {editingCommentId === comment.id ? (
                      <button
                        onClick={handleUpdate}
                        className="text-foreground bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(comment.id)}
                        className="text-blue-500 hover:text-blue-700 px-4 py-2 rounded-lg transition-colors"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => setDeleteCommentId(comment.id)}
                      className="text-red-500 hover:text-red-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </footer>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {editingCommentId === comment.id ? (
                  <textarea
                    value={editedComment}
                    onChange={(e) => setEditedComment(e.target.value)}
                    className="w-full p-4 text-sm text-foreground bg-background border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
                  />
                ) : (
                  comment.comment
                )}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteCommentId !== null}
        onRequestClose={() => setDeleteCommentId(null)}
        contentLabel="Confirm Deletion"
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
      >
        <h2 className="text-xl font-bold text-gray-900">Are you sure?</h2>
        <p className="mt-2 text-gray-600">This action cannot be undone.</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleDelete}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Yes, Delete
          </button>
          <button
            onClick={() => setDeleteCommentId(null)}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Comments;
