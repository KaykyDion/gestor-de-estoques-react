import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { PageLayout } from "../styles";

export default function ItemBoundary() {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return (
          <PageLayout>
            <h2>Oops... produto não encontrado ou inexistente =(</h2>
          </PageLayout>
        );
      case 401:
        return (
          <PageLayout>
            <h2>Você não está autorizado à ver esta página</h2>
          </PageLayout>
        );
      case 400:
        return (
          <PageLayout>
            <h2>Algo deu errado ao carregar a página</h2>
          </PageLayout>
        );
      case 500:
        return (
          <PageLayout>
            <h2>Erro interno no servidor</h2>
          </PageLayout>
        );
    }
  }

  return <h2>Algo deu errado.</h2>;
}
