import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
} from "@ionic/react";
import "./BookCard.css";
import { star } from "ionicons/icons";

const BookCard: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Harry Potter: Sorcerer Stone</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="5">
              <img
                src="https://imgs.search.brave.com/35-bdzEbQSRYcarOmq3FFgnFqimgrYofj2QhrZ1GiiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFEYXBN/NDJJQk0vMi8wLzEw/MDN3L2NhbnZhLXJl/ZC1waG90by1zY2ll/bmNlLWZpY3Rpb24t/Ym9vay1jb3Zlci1C/TVhSWkhGMlZxay5q/cGc"
                alt="book cover picture"
              />
            </IonCol>

            <IonCol size="12" sizeMd="7">
              <div className="book-details">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                  delectus deserunt corporis natus, id perferendis non qui
                  assumenda nesciunt illo.
                </p>
                <p style={{ marginTop: 10 }}>$ 14.99</p>

                <div className="review-stars" style={{ marginTop: 10 }}>
                  <IonIcon icon={star} />
                  <IonIcon icon={star} />
                  <IonIcon icon={star} />
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default BookCard;
