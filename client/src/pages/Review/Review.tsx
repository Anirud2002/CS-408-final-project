import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import "./Review.css";
import { add, star } from "ionicons/icons";
import AddReviewModal from "./components/AddReviewModal";
import { useEffect, useState } from "react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { Book } from "../Home/Home";
import { useParams } from "react-router";
import axios from "axios";

const Review: React.FC = () => {
  const apiUrl: string =
    "https://prikl74ph0.execute-api.us-east-2.amazonaws.com";

  const [book, setBook] = useState<Book>();
  const [shouldFetchBook, setShouldFetchBook] = useState<boolean>(false);
  // Extract the bookId parameter from the URL
  const { bookId } = useParams<{ bookId: string }>();
  useEffect(() => {
    const fetchBook = async () => {
      return await axios
        .get(`${apiUrl}/book/${bookId}`)
        .then((res) => {
          setBook(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchBook();
  }, [shouldFetchBook]);

  const [present, dismiss] = useIonModal(AddReviewModal, {
    dismiss: (data: string, role: string) => dismiss(data, role),
    book,
  });

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
        <IonToolbar class="ion-padding-horizontal">
          <IonTitle>Reviews - {book?.title}</IonTitle>
          <IonButton slot="end" onClick={openModal}>
            <IonIcon icon={add} slot="start" />
            Add review
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reviews - {book?.title}</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Loop through the reviews array to render IonItem components */}
        {book?.reviews?.map((review, index) => (
          <IonCard key={index}>
            <IonCardHeader>
              <IonCardTitle>
                {[...Array(review.stars - 1)].map((_, index) => (
                  <IonIcon
                    key={index}
                    icon={star}
                    style={{
                      cursor: "pointer",
                      fontSize: "24px",
                      marginRight: "8px",
                    }}
                    color="dark"
                  />
                ))}
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonText>{review.reviewComment}</IonText>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Review;
