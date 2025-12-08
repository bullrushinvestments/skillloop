import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

interface Test {
  id: string;
  title: string;
  content: string;
}

interface FormData {
  title: string;
  content: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [tests, setTests] = useState<Test[]>([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    try {
      const response = await axios.get('/api/tests');
      setTests(response.data);
    } catch (error) {
      console.error('Failed to fetch tests', error);
    }
  };

  const onSubmit = handleSubmit(async data => {
    try {
      await axios.post('/api/test', { ...data });
      reset();
      router.push('/');
    } catch (error) {
      console.error('Failed to create test', error);
    }
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Write Tests</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
          />
          {errors.title && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            rows={4}
            {...register('content', { required: 'Content is required' })}
            className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
          />
          {errors.content && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.content.message}
            </p>
          )}
        </div>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

interface Test {
  id: string;
  title: string;
  content: string;
}

interface FormData {
  title: string;
  content: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [tests, setTests] = useState<Test[]>([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    try {
      const response = await axios.get('/api/tests');
      setTests(response.data);
    } catch (error) {
      console.error('Failed to fetch tests', error);
    }
  };

  const onSubmit = handleSubmit(async data => {
    try {
      await axios.post('/api/test', { ...data });
      reset();
      router.push('/');
    } catch (error) {
      console.error('Failed to create test', error);
    }
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Write Tests</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
          />
          {errors.title && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            rows={4}
            {...register('content', { required: 'Content is required' })}
            className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
          />
          {errors.content && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.content.message}
            </p>
          )}
        </div>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </div>
  );
};

export default WriteTests;