import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
    { id: "world", label: "Grafik Design" },
    { id: "ny", label: "N.Y." },
    { id: "business", label: "Business" },
    { id: "arts", label: "Arts" },
    { id: "science", label: "Science" },
];

const peopleByTab = {
    world: [
        {
            name: 'Logo Design',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }, {
            name: 'Visitenkarten',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }, {
            name: 'Flyer',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }, {
            name: 'Test 1',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }, {
            name: 'Test 1',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        },
        {
            name: 'Test 1',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }, {
            name: 'Test 1',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }, {
            name: 'Test 1',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }, {
            name: 'Test 1',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }, {
            name: 'Test 1',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        },      {
            name: 'Test 1',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }, {
            name: 'Test 1',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }, {
            name: 'Test 1',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }, {
            name: 'Test 1',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        }, {
            name: 'Test 1',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        },

    ], ny: [
        {
            name: 'Carol White',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        },

    ], business: [
        {
            name: 'Carol White',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        },

    ], arts: [
        {
            name: 'Carol White',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        },

    ],
    science: [
        {
            name: 'Carol White',
            email: 'carol.white@example.com',
            role: 'Scientist',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
        },

    ],
};

export default function Services() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const activePeople = peopleByTab[activeTab];

    return (
        <div className="overflow-hidden bg-transparent py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex space-x-1 justify-center">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`${activeTab === tab.id ? "text-indigo-700" : "hover:text-gray-700"
                                } relative rounded-md px-4 py-2 text-sm font-medium text-gray-500`}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId='active-pill'
                                    className="absolute inset-0 bg-indigo-100"
                                    style={{ borderRadius: 8 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {activePeople.map((person) => (
                        <div
                            key={person.email}
                            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                        >
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                                <p className="truncate text-sm text-gray-500">{person.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
