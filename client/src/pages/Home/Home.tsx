import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import "./Home.css";
import BookCard from "./components/BookCard";
import { add } from "ionicons/icons";
import AddBookModal from "./components/AddBookModal";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Book {
  bookId: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  reviews: [string];
}

export interface BookReview {
  stars: number;
  reviewComments: [string];
}

const Home: React.FC = () => {
  const apiUrl: string =
    "https://prikl74ph0.execute-api.us-east-2.amazonaws.com";
  const [present, dismiss] = useIonModal(AddBookModal, {
    dismiss: (data: boolean, role: string) => dismiss(data, role),
  });

  const [books, setBooks] = useState<Book[]>([]);
  const [shouldFetchBook, setShouldFetchBook] = useState<boolean>(false);

  useEffect(() => {
    const fetchBooks = async () => {
      return await axios
        .get(`${apiUrl}/books`)
        .then((res) => {
          console.log(res.data);
          setBooks(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchBooks();
  }, [shouldFetchBook]);

  function openModal() {
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.data) {
          setShouldFetchBook(true);
        }
      },
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-padding-horizontal">
          <IonTitle>Book Inventory</IonTitle>
          <IonButton slot="end" onClick={openModal}>
            <IonIcon icon={add} slot="start" />
            Add Book
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Book Inventory</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="bookcards">
          {books.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
