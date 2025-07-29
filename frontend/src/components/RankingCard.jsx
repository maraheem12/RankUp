    import React from 'react';

    const RankingCard = ({ user, position }) => {
        return (
            <div className="ranking-card">
                <h3>{position}. {user.name}</h3>
                <p>Score: {user.score}</p>
            </div>
        );
    };

    export default RankingCard;
    