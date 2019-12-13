import 'semantic-ui-css/semantic.min.css'
import {
    Segment, Grid, Image, Menu, Button, Icon, Breadcrumb, Container, Step, Header,
  } from 'semantic-ui-react';
import Link from 'next/link';
import Home from '../components/Home';
import HeaderComp from '../components/Header';
import 'semantic-ui-css/semantic.min.css'
export default () => (
  <HeaderComp>
      <Home />
  </HeaderComp>
);
