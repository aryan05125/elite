"use client";

import { useState } from "react";

const ServicesAdmin = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "AI Automation",
      desc: "Intelligent workflow automation systems.",
    },
    {
      id: 2,
      title: "AI Agents",
      desc: "Autonomous AI agents for businesses.",
    },
  ]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addService = () => {
    if (!title || !desc) {
      return alert("Fill all fields");
    }

    const newService = {
      id: Date.now(),
      title,
      desc,
    };

    setServices([newService, ...services]);

    setTitle("");
    setDesc("");
  };

  const deleteService = (id) => {
    const filtered = services.filter(
      (service) => service.id !== id
    );

    setServices(filtered);
  };

  return (
    <div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h1 className="text-5xl font-bold">
            Services
          </h1>

          <p className="text-gray-400 mt-3">
            Manage all AI services
          </p>
        </div>

      </div>

      <div className="glass-card p-8 mt-12">

        <h2 className="text-3xl font-bold mb-8">
          Add New Service
        </h2>

        <div className="grid grid-cols-1 gap-5">

          <input
            type="text"
            placeholder="Service Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="bg-white/5 border border-white/10 rounded-2xl p-4 outline-none"
          />

          <textarea
            placeholder="Service Description"
            value={desc}
            onChange={(e) =>
              setDesc(e.target.value)
            }
            className="bg-white/5 border border-white/10 rounded-2xl p-4 outline-none h-40"
          />

          <button
            onClick={addService}
            className="gradient-btn py-4 rounded-2xl font-semibold"
          >
            Add Service
          </button>

        </div>

      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {services.map((service) => (
          <div
            key={service.id}
            className="glass-card p-8"
          >

            <h2 className="text-3xl font-bold">
              {service.title}
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              {service.desc}
            </p>

            <div className="flex gap-4 mt-8">

              <button className="bg-blue-600 px-5 py-3 rounded-xl">
                Edit
              </button>

              <button
                onClick={() =>
                  deleteService(service.id)
                }
                className="bg-red-600 px-5 py-3 rounded-xl"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ServicesAdmin;