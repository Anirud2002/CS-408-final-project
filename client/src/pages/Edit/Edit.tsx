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
} from "@ionic/react";
import "./Edit.css";
import { star } from "ionicons/icons";
import { useEffect, useState } from "react";
import { Book } from "../Home/Home";
import axios from "axios";
import { useParams } from "react-router";

const Edit: React.FC = () => {
  const apiUrl: string =
    "https://prikl74ph0.execute-api.us-east-2.amazonaws.com";

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
                  value={book?.title}
                  label="Title"
                  labelPlacement="floating"
                ></IonInput>

                <IonTextarea
                  label="Description"
                  labelPlacement="floating"
                  value={book?.description}
                ></IonTextarea>

                <IonInput
                  value={book?.price}
                  label="Price ($)"
                  labelPlacement="floating"
                ></IonInput>

                <IonButton color="warning">Update</IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Edit;
