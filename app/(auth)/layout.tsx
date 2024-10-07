const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-11 pt-11 border-t-8 border-transparent h-full flex items-center justify-center">{children}</div>
  );
};

export default AuthLayout;
