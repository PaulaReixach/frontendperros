import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ElasticsearchService } from './elasticsearch.service';

describe('ElasticsearchService', () => {
  let service: ElasticsearchService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ElasticsearchService],
    });

    service = TestBed.inject(ElasticsearchService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no haya solicitudes pendientes después de cada prueba
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve information from Elasticsearch', () => {
    const mockResponse = {/* mock response data */ };

    service.getInfo().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne('http://localhost:9201/check');
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);
  });

  it('should perform a search in Elasticsearch', () => {
    const query = 'Orange';
    const mockResponse = { /* mock response data */ };

    service.search(query).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`http://localhost:9201/search?query=${query}`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);
  });
});
