const Skeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="w-4/5 bg-slate-50 m-auto mt-6 rounded">
        <div className="w-3/5 h-6 bg-slate-100 ml-4 mt-4 inline-block" />
        <div className="w-4/5 h-4 bg-slate-100 ml-4 mt-3" />
        <div className="w-4/5 h-4 bg-slate-100 ml-4 mt-3" />
        <div className="w-4/5 h-4 bg-slate-100 ml-4 mt-3" />
        <div className="w-4/5 h-4 bg-slate-100 ml-4 mt-3 mb-4 inline-block" />
      </div>
      <div className="w-4/5 bg-slate-50 m-auto mt-6 rounded">
        <div className="w-3/5 h-6 bg-slate-100 ml-4 mt-4 inline-block" />
        <div className="w-4/5 h-4 bg-slate-100 ml-4 mt-3" />
        <div className="w-4/5 h-4 bg-slate-100 ml-4 mt-3 mb-4 inline-block" />
      </div>
      <div className="w-4/5 bg-slate-50 m-auto mt-6 rounded">
        <div className="w-3/5 h-6 bg-slate-100 ml-4 mt-4 inline-block" />
        <div className="w-4/5 h-4 bg-slate-100 ml-4 mt-3" />
        <div className="w-4/5 h-4 bg-slate-100 ml-4 mt-3" />
        <div className="w-4/5 h-4 bg-slate-100 ml-4 mt-3 mb-4 inline-block" />
      </div>
    </div>
  );
};

export default Skeleton;
