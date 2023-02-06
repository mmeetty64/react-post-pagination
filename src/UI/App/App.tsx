import React, { useContext, useEffect, FC, useState } from 'react'
import { Context } from '../../Context/ContextWrapper'
import './App.css';
import { ContextWrapper } from '../../Context/ContextWrapper';
import { Layout } from '../Component/HOCS/Layout';
import { Post } from '../Component/Post';
import { Pagination } from 'react-bootstrap';
import { useAsyncEffect } from '../../hooks/useAsyncEffect';

const App = () => {
  
  return (
    <ContextWrapper>
      <Layout>
        <Post/>
      </Layout>
    </ContextWrapper>
  );
}

export default App;
