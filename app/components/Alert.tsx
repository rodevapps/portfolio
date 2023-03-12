type T = {
  variant: string,
  title: string
}

export default function Alert({ variant, title }: T) {
  return (
    <div className="p-4 mt-10 text-sm text-red-700 bg-red-100 max-w-md mx-auto" role="alert">
      {title}
    </div>
  );
}