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

const Edit: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit - Harry Potter: Sorcerer Stone</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Edit - Harry Potter: Sorcerer Stone
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="4">
              <img
                className="edit-img"
                src="https://imgs.search.brave.com/35-bdzEbQSRYcarOmq3FFgnFqimgrYofj2QhrZ1GiiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFEYXBN/NDJJQk0vMi8wLzEw/MDN3L2NhbnZhLXJl/ZC1waG90by1zY2ll/bmNlLWZpY3Rpb24t/Ym9vay1jb3Zlci1C/TVhSWkhGMlZxay5q/cGc"
                alt="book cover picture"
              />
            </IonCol>

            <IonCol size="12" sizeMd="8">
              <div className="book-details">
                <IonInput
                  value={"Harry Potter: Sorcerer Stone"}
                  label="Title"
                  labelPlacement="floating"
                ></IonInput>

                <IonTextarea
                  label="Description"
                  labelPlacement="floating"
                  value={
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Namdelectus deserunt corporis natus, id perferendis non quiassumenda nesciunt illo."
                  }
                ></IonTextarea>

                <IonInput
                  value={"14.99"}
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
