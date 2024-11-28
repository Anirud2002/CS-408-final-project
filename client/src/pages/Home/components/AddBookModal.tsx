import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef } from "react";

const AddBookModal = ({
  dismiss,
}: {
  dismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  const titleRef = useRef<HTMLIonInputElement>(null);
  const imageUrlRef = useRef<HTMLIonInputElement>(null);
  const descriptionRef = useRef<HTMLIonInputElement>(null);

  const handleAdd = () => {};
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton color="medium" onClick={() => dismiss(null, "cancel")}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle>Add a book</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput
            ref={titleRef}
            labelPlacement="stacked"
            label="Review description"
            placeholder="This book was great!"
            required={true}
          />
        </IonItem>
        <IonItem>
          <IonInput
            ref={imageUrlRef}
            labelPlacement="stacked"
            label="Image URL"
            placeholder="https://url-to-image"
            required={true}
          />
        </IonItem>
        <IonItem>
          <IonInput
            ref={descriptionRef}
            labelPlacement="stacked"
            label="Book description"
            placeholder="This book about a boy and girl who fell in love!"
            required={true}
          />
        </IonItem>
      </IonContent>

      <IonFooter>
        <IonButton
          onClick={handleAdd}
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

export default AddBookModal;
