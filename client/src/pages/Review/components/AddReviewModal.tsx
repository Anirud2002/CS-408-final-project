import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonToast,
} from "@ionic/react";
import { star, starOutline } from "ionicons/icons";
import { useRef, useState } from "react";
import { Book, BookReview } from "../../Home/Home";
import axios from "axios";

const AddReviewModal = ({
  dismiss,
  book,
}: {
  dismiss: (data?: boolean | null | undefined | number, role?: string) => void;
  book: Book;
}) => {
  const apiUrl: string =
    "https://prikl74ph0.execute-api.us-east-2.amazonaws.com";
  const [present] = useIonToast();

  const inputRef = useRef<HTMLIonInputElement>(null);

  const [stars, setStars] = useState<number>(-1);

  const handleAddReview = async () => {
    const reviewComment = inputRef.current?.value + "";

    if (stars + 1 === 0 || !reviewComment) {
      showToast("top", "Fill out all the fields!", "danger");
      return;
    }

    const newReview: BookReview = {
      stars: stars + 1,
      reviewComment: reviewComment,
    };

    console.log(book.reviews);

    const payload: Book = {
      ...book,
      reviews: !book.reviews ? [newReview] : [...book.reviews, newReview],
    };

    await axios
      .put(`${apiUrl}/book`, payload)
      .then((_) => {
        dismiss(true);
        showToast("top", "New review added!", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showToast = (
    position: "top" | "middle" | "bottom",
    message: string,
    color: "success" | "danger" | "warning" | "dark" | "light"
  ) => {
    present({
      message,
      duration: 1500,
      position: position,
      color,
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton color="medium" onClick={() => dismiss(false, "cancel")}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle>Write your review!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          {[...Array(5)].map((_, index) => (
            <IonIcon
              key={index}
              icon={index < stars ? star : starOutline}
              onClick={() => setStars(index + 1)} // Update stars on click
              style={{
                cursor: "pointer",
                fontSize: "24px",
                marginRight: "8px",
              }}
              color="dark"
            />
          ))}
        </IonItem>
        <IonItem>
          <IonInput
            ref={inputRef}
            labelPlacement="stacked"
            label="Review description"
            placeholder="This book was great!"
          />
        </IonItem>
      </IonContent>

      <IonFooter>
        <IonButton
          onClick={handleAddReview}
          strong={true}
          color="dark"
          expand="block"
        >
          Add
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default AddReviewModal;
