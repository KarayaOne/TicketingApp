"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ ticket }) => {
  const editMode = ticket._id === "new" ? false : true;
  const router = useRouter();

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editMode) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
      router.refresh();
      router.push("/");
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
      router.refresh();
      router.push("/");
    }
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not Started",
    category: "Hardware Problem",
  };

  if (editMode) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-1/2"
      >
        <h3>{`${editMode ? "Update" : "Create"} Ticket`}</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required={true}
          onChange={handleChange}
          value={formData.title}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          required={true}
          rows="5"
        />

        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          required={true}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Network Problem">Network Problem</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="priority">Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>

          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>

          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>

          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>

          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label htmlFor="progress">Progress</label>
        <input
          type="range"
          name="progress"
          id="progress"
          value={formData.progress}
          onChange={handleChange}
          min="0"
          max="100"
        />

        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          onChange={handleChange}
          value={formData.status}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <input
          type="submit"
          className="btn"
          value={`${editMode ? "Update" : "Create"} Ticket`}
        />
      </form>
    </div>
  );
};

export default TicketForm;
