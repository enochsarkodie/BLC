import Stat from './Stat';
import './Ratings.css'



export default function Rate() {
  return (
    <div className="rate">
  <Stat end={1000} label="Client Consultations" suffix="+" />
  <Stat end={87} label="Success Rate" suffix="%" />
  <Stat end={300} label="Cases Solved" suffix="+" />
  <Stat end={15} label="Affiliations" suffix="+" />
</div>

  );
}
