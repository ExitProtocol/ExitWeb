import Systemlog from '@/app/systemlogs/SystemLogs';
import { Header } from '@/app/about/header';
import { Footer } from '@/app/sections/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <Systemlog />
      <Footer />
    </>
  );
}