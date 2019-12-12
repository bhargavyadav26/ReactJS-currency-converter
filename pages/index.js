import 'semantic-ui-css/semantic.min.css'

import {
    Segment, Grid, Image, Menu, Button, Icon, Breadcrumb, Container, Step,
  } from 'semantic-ui-react';

import Link from 'next/link';

const Index = () => (
  <Container>
      <Button>hi</Button>
    <Link href="/about" title="About Page">
  <a>About Page</a>
</Link>
    <p>Hello Next.js</p>
  </Container>
);

export default Index;