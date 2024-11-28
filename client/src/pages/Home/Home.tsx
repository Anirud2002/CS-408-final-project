import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import "./Home.css";
import BookCard from "./components/BookCard";
import { add } from "ionicons/icons";
import AddBookModal from "./components/AddBookModal";

const Home: React.FC = () => {
  const [present, dismiss] = useIonModal(AddBookModal, {
    dismiss: (data: string, role: string) => dismiss(data, role),
  });

  function openModal() {
    present({
      // onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
      //   if (ev.detail.role === 'confirm') {
      //   }
      // },
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
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
