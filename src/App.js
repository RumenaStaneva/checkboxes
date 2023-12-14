import './styles/App.css';
import Checkbox from './components/Checkbox';
import CheckboxWrapper from './components/CheckboxWrapper';

function App() {
  return (
    <main className="main">
      <h1 className="title">Checkbox task</h1>

      <div className="checkboxes-row-container d-flex justify-content-between flex-wrap">
        <CheckboxWrapper title={'Base Checkbox'}>
          <Checkbox label={'Checkbox 1'} id={'chk-base-1'} />
        </CheckboxWrapper>

        <CheckboxWrapper title={'Stacked Checkboxes'} classNameCheckboxContainer={'d-flex flex-column'}>
          <Checkbox label={'Checkbox 1'} id={'chk-stck-1'} />
          <Checkbox label={'Checkbox 2'} id={'chk-stck-2'} />
          <Checkbox label={'Checkbox 3'} id={'chk-stck-3'} />
        </CheckboxWrapper>

        <CheckboxWrapper title={'Inline Checkboxes'} classNameCheckboxContainer={'d-flex flex-row'}>
          <Checkbox label={'Checkbox 1'} id={'chk-inl-1'} />
          <Checkbox label={'Checkbox 2'} id={'chk-inl-2'} />
          <Checkbox label={'Checkbox 3'} id={'chk-inl-3'} />
        </CheckboxWrapper>
      </div>

      <div className="checkbox-varieties-container d-flex flex-wrap">
        <CheckboxWrapper title={'Checked Disabled'}>
          <Checkbox label={'Checkbox 1'} id={'chk-dsbl-cheked-1'} disabled={true} checked={true} />
        </CheckboxWrapper>

        <CheckboxWrapper title={'Checked Disabled'}>
          <Checkbox label={'text_primary'} id={'text_primary'} checked={true} />
        </CheckboxWrapper>

        <CheckboxWrapper title={'Checked Disabled'}>
          <Checkbox label={'Checkbox 1'} id={'chk-dsbl-uncheked-1'} disabled={true} />
        </CheckboxWrapper>

        <CheckboxWrapper title={'Checked partial'}>
          <Checkbox label={'Checkbox 1'} id={'chk-checked-partial-1'} partial={true} checked={true} />
        </CheckboxWrapper>

        <CheckboxWrapper title={'Checked partial Disabled'}>
          <Checkbox label={'Checkbox 1'} id={'chk-checked-partial-disabled-1'} disabled={true} partial={true} checked={true} />
        </CheckboxWrapper>
      </div>
    </main>
  );
}

export default App;
