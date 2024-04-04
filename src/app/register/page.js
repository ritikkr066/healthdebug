import React from 'react';
import RegistrationForm from '@/component/Registration';

const page = () => {
  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="mb-4 text-2xl">Register</h1>
        <RegistrationForm />
      </div>
    </>
  );
}

export default page;
