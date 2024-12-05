import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTextarea,
  IonTitle,
  IonToolbar,
  useIonToast,
} from "@ionic/react";
import "./Edit.css";
import { star } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { Book } from "../Home/Home";
import axios from "axios";
import { useParams } from "react-router";

const Edit: React.FC = () => {
  const apiUrl: string =
    "https://prikl74ph0.execute-api.us-east-2.amazonaws.com";

  const [present] = useIonToast();
  const [book, setBook] = useState<Book>();
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
  }, []);

  const titleRef = useRef<HTMLIonInputElement>(null);
  const descriptionRef = useRef<HTMLIonTextareaElement>(null);
  const priceRef = useRef<HTMLIonInputElement>(null);

  const handleUpdate = async () => {
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const price = priceRef.current?.value;

    if (!title || !description || !price) {
      showToast("top", "Fill out all the fields!", "danger");
      return;
    }

    const payload = {
      ...book,
      title,
      description,
      price,
    };

    console.log(payload);

    await axios
      .put(`${apiUrl}/book`, payload)
      .then((_) => {
        showToast("top", "Book Updated!", "success");
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
          <IonTitle>Edit - {book?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Edit - {book?.title}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="4">
              <img
                className="edit-img"
                src={book?.imageUrl}
                alt={book?.title}
              />
            </IonCol>

            <IonCol size="12" sizeMd="8">
              <div className="book-details">
                <IonInput
                  ref={titleRef}
                  value={book?.title}
                  label="Title"
                  labelPlacement="floating"
                ></IonInput>

                <IonTextarea
                  ref={descriptionRef}
                  label="Description"
                  labelPlacement="floating"
                  value={book?.description}
                ></IonTextarea>

                <IonInput
                  ref={priceRef}
                  value={book?.price}
                  label="Price ($)"
                  labelPlacement="floating"
                ></IonInput>

                <IonButton color="warning" onClick={handleUpdate}>
                  Update
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Edit;
