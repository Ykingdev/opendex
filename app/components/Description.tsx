import React from 'react';

interface DescriptionProps {
    description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
    return (
        <div className=" bg-green-200 p-3 rounded-md text-sm w-48 ">
            <p >{description}</p>
        </div>
    );
};

export default Description;
