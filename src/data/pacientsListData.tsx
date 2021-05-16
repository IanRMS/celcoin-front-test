import Person1 from "../assets/images/person1.png";
import Person2 from "../assets/images/person2.png";
import Person3 from "../assets/images/person3.png";
import Person4 from "../assets/images/person4.png";
import Person5 from "../assets/images/person5.png";
import Person6 from "../assets/images/person6.png";

const PacientsListData = {
  amount: 6,
  list: [
    {
      name: "Renata Augusta Ferreira",
      image: Person1,
      diagnostics: "TDAH CAV ADHD, Autismo",
      done: 3,
      canceled: 1,
      pending: 1,
    },
    {
      name: "Leandro Motta Braga",
      image: Person5,
      diagnostics: "TDAH CAV ADHD, Autismo",
      done: 6,
      canceled: 0,
      pending: 50,
    },
    {
      name: "Kuromi Naori Kagasawa",
      image: Person6,
      diagnostics: "TDAH CAV ADHD, Autismo",
      done: 22,
      canceled: 0,
      pending: 2,
    },
    {
      name: "José Otávio Felino",
      image: Person2,
      diagnostics: "TDAH CAV ADHD",
      done: 30,
      canceled: 12,
      pending: 15,
    },
    {
      name: "Milena Marques",
      image: Person4,
      diagnostics: "TDAH CAV ADHD, Autismo",
      done: 21,
      canceled: 11,
      pending: 5,
    },
    {
      name: "Diego Oliveto Silva",
      image: Person3,
      diagnostics: "TDAH CAV ADHD, Autismo",
      done: 7,
      canceled: 1,
      pending: 6,
    },
  ],
};

export default PacientsListData;
