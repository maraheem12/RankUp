    import React, { useEffect, useState } from 'react';
    import RankingCard from '../components/RankingCard';
    import Navbar from '../components/Navbar';
    import '../styles.css';

    const RankingPage = () => {
        const [users, setUsers] = useState([]);

        useEffect(() => {
            const fetchUsers = async () => {
                const response = await fetch('http://localhost:5000/api/ranking');
                const data = await response.json();
                setUsers(data);
            };
            fetchUsers();
        }, []);
        
        return (
            <div className="ranking-page">
                <Navbar />
                <div className="rankings">
                    {users.map((user, index) => (
                        <RankingCard key={index} user={user} position={index + 1} />
                    ))}
                </div>
            </div>
        );
    };

    export default RankingPage;
    