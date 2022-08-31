import { Fragment } from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meet up",
    image:
      "https://thumbs.dreamstime.com/b/meetup-neon-sign-brick-wall-background-86475691.jpg",
    address: "My Address, My Address city, my address distt",
    description: "this is first meet up",
  },
  {
    id: "m2",
    title: "2 Meet up",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPEt2fKcBh0cb03pRSbwUGDpD9KENhlO83-lrXEJS&s",
    address: "My Address, My Address city, my address distt",
    description: "this is first meet up",
  },
  {
    id: "m3",
    title: "3 Meet up",
    image:
      "https://media.istockphoto.com/photos/hello-and-welcome-written-white-lightbox-sitting-on-blue-background-picture-id1371547852?b=1&k=20&m=1371547852&s=170667a&w=0&h=vRGvMO4a7KKYdTQ9Ln1UVdlg5C0POExw73jGsotVgzA=",
    address: "My Address, My Address city, my address distt",
    description: "this is first meet up",
  },
];
const HomePage = () => {
  return (
    <Fragment>
      <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>
    </Fragment>
  );
};

export default HomePage;
