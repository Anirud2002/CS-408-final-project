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
  useIonToast,
} from "@ionic/react";
import axios from "axios";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const AddBookModal = ({
  dismiss,
}: {
  dismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  const apiUrl: string =
    "https://prikl74ph0.execute-api.us-east-2.amazonaws.com";
  const [present] = useIonToast();

  const showDangerToast = (
    position: "top" | "middle" | "bottom",
    message: string
  ) => {
    present({
      message,
      duration: 1500,
      position: position,
      color: "danger",
    });
  };

  const titleRef = useRef<HTMLIonInputElement>(null);
  const imageUrlRef = useRef<HTMLIonInputElement>(null);
  const descriptionRef = useRef<HTMLIonInputElement>(null);

  const handleAdd = async () => {
    const title = titleRef.current?.value;
    const imageUrl = imageUrlRef.current?.value;
    const description = descriptionRef.current?.value;

    if (!title || !description || !imageUrl) {
      showDangerToast("top", "Fill out all the fields!");
      return;
    }

    const payload = {
      bookId: uuidv4(),
      title,
      imageUrl,
      description,
    };

    const response = await axios.put(`${apiUrl}/book`, payload);
    console.log(response);
  };

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
