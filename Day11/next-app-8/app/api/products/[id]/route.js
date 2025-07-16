import { products } from "@/lib/products";

export let GET = async (req, { params }) => {
  try {
    const id = Number(params.id);
    const product = products.find((i) => i.id === id);
    if (!product) {
      return Response.json(
        {
          status: "Wrong Request",
          message: "please check tour id",
        },
        {
          status: 400,
        }
      );
    }
    return Response.json(
      {
        status: "sucess",
        data: {
          products,
        },
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return Response.json(
      {
        status: "Failed",
        message: err,
      },
      {
        status: 500,
      }
    );
  }
};

export let DELETE = async (req, { params }) => {
  try {
    const id = Number(params.id);
    const product = products.find((i) => i.id === id);
    if (!product) {
      return Response.json(
        {
          status: "Wrong Request",
          message: "please check your id",
        },
        {
          status: 400,
        }
      );
    }
    products.pop(product);
    return Response.json(
      {
        status: "Product deleted Sucessfully",
        data: {
          products,
        },
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return Response.json(
      {
        status: "Failed to delete",
        message: err,
      },
      {
        status: 500,
      }
    );
  }
};

export let PATCH = async (req, { params }) => {
  try {
    const id = Number(params.id);
    const data = await req.json();
    const product = products.find((i) => i.id === id);
    const index = products.findIndex((i) => i.id === i);
    console.log(id, data, product, index);
    if (!product) {
      return Response.json(
        {
          status: "Wrong data",
          message: "Please enter valid name and price",
        },
        {
          status: 400,
        }
      );
    }
    const newData = {
      id: id,
      name: data.name || product.name,
      price: data.price || product.price,
    };
    products.splice(index, 1, newData);
    return Response.json(
      {
        status: "Update sucessfully",
        data: {
          products,
        },
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    return Response.json(
      {
        status: "Failed",
        message: err,
      },
      {
        status: 500,
      }
    );
  }
};
