import { Link, useParams } from "react-router-dom";
import { useSingleData } from "@/entities/items";

function SinglePage() {
  const { id } = useParams();
  const { item, isLoading, error } = useSingleData(id as string);

  if (isLoading) {
    return <div className="detail">Loading...</div>;
  }

  if (error) {
    return (
      <div className="detail">
        <Link to="/">Go Back</Link>
        <h2>Error</h2>
        <p>{String(error)}</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="detail">
        <Link to="/">Go Back</Link>
        <h2>Item not found</h2>
      </div>
    );
  }

  return (
    <div className="detail">
      <Link to="/">Go Back</Link>
      <h2>Item Details</h2>
      <p>ID: {item.id}</p>
      <p>Name: {item.name}</p>
      <p>Description: {item.description}</p>
    </div>
  );
}

export default SinglePage;
